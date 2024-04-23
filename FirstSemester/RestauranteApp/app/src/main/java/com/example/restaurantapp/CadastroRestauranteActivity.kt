package com.example.restaurantapp

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.android.synthetic.main.activity_cadastro_restaurante.*

class CadastroRestauranteActivity : AppCompatActivity() {
    private lateinit var sharedPreferences: SharedPreferences
    private var listaRestaurantes: MutableList<Restaurante> = mutableListOf()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_restaurante)

        sharedPreferences = getSharedPreferences("restaurantes_prefs", Context.MODE_PRIVATE)

        textViewTituloCadastro.text = "Cadastro de Restaurante"

        btnSalvar.setOnClickListener {
            salvarRestaurante()
        }

        btnVerLista.setOnClickListener {
            abrirListaRestaurantes()
        }
    }

    private fun salvarRestaurante() {
        val nome = editTextNome.text.toString()
        val endereco = editTextEndereco.text.toString()
        val latitude = editTextLatitude.text.toString().toDouble()
        val longitude = editTextLongitude.text.toString().toDouble()
        val tipoComida = editTextTipoComida.text.toString()
        val classificacao = editTextClassificacao.text.toString().toInt()
        val descricao = editTextDescricao.text.toString()

        val restaurante = Restaurante(
            id = System.currentTimeMillis(),
            nome = nome,
            endereco = endereco,
            latitude = latitude,
            longitude = longitude,
            tipoComida = tipoComida,
            classificacao = classificacao,
            descricao = descricao
        )

        listaRestaurantes.add(restaurante)
        salvarPrefs()
    }

    private fun salvarPrefs() {
        val editor = sharedPreferences.edit()
        val listaJson = Gson().toJson(listaRestaurantes)
        editor.putString("listaRestaurantes", listaJson)
        editor.apply()
    }

    private fun abrirListaRestaurantes() {
        val intent = Intent(this, ListaRestauranteActivity::class.java)
        startActivity(intent)
    }
}
