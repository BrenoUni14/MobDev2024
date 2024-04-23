package com.example.contactapp

import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

class ContatoActivity : AppCompatActivity() {

    private lateinit var listaContatos: MutableList<Contato>
    private lateinit var editTextNome: EditText
    private lateinit var editTextEmail: EditText
    private lateinit var editTextTelefone: EditText
    private lateinit var sharedPreferences: SharedPreferences

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.contato_activity)

        // Inicializar as Views
        editTextNome = findViewById(R.id.editTextNome)
        editTextEmail = findViewById(R.id.editTextEmail)
        editTextTelefone = findViewById(R.id.editTextTelefone)
        val btnGravar: Button = findViewById(R.id.btnGravar)
        val btnPesquisar: Button = findViewById(R.id.btnPesquisar)

        // Inicializar a lista de contatos
        listaContatos = mutableListOf()

        // Inicializar o SharedPreferences
        sharedPreferences = getSharedPreferences("contatos_prefs", MODE_PRIVATE)

        // Carregar contatos salvos
        carregarPrefs()

        // Botão Gravar
        btnGravar.setOnClickListener {
            gravarContato()
        }

        // Botão Pesquisar
        btnPesquisar.setOnClickListener {
            pesquisarContato()
        }
    }

    private fun gravarContato() {
        val nome = editTextNome.text.toString().trim()
        val email = editTextEmail.text.toString().trim()
        val telefone = editTextTelefone.text.toString().trim()

        if (nome.isEmpty() || email.isEmpty() || telefone.isEmpty()) {
            Toast.makeText(this, "Preencha todos os campos", Toast.LENGTH_SHORT).show()
            return
        }

        val contato = Contato(System.currentTimeMillis(), nome, email, telefone)
        listaContatos.add(contato)
        salvarPrefs()

        // Limpar campos após gravar
        editTextNome.text.clear()
        editTextEmail.text.clear()
        editTextTelefone.text.clear()

        Toast.makeText(this, "Contato gravado com sucesso", Toast.LENGTH_SHORT).show()
    }

    private fun pesquisarContato() {
        val nomePesquisa = editTextNome.text.toString().trim()

        if (nomePesquisa.isEmpty()) {
            Toast.makeText(this, "Digite um nome para pesquisar", Toast.LENGTH_SHORT).show()
            return
        }

        for (contato in listaContatos) {
            if (contato.nome.contains(nomePesquisa)) {
                // Preencher campos com o contato encontrado
                editTextNome.setText(contato.nome)
                editTextEmail.setText(contato.email)
                editTextTelefone.setText(contato.telefone)
                return
            }
        }

        Toast.makeText(this, "Contato não encontrado", Toast.LENGTH_SHORT).show()
    }

    private fun salvarPrefs() {
        val editor = sharedPreferences.edit()
        val gson = Gson()
        val json = gson.toJson(listaContatos)
        editor.putString("contatos", json)
        editor.apply()
    }

    private fun carregarPrefs() {
        val gson = Gson()
        val json = sharedPreferences.getString("contatos", null)
        val type = object : TypeToken<ArrayList<Contato>>() {}.type
        listaContatos = gson.fromJson(json, type) ?: mutableListOf()
    }

    override fun onResume() {
        super.onResume()
        carregarPrefs()
    }
}
