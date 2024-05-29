package com.example.agenda_contato_recyclevioew_firebase.activity

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.agenda_contato_recyclevioew_firebase.R
import com.example.agenda_contato_recyclevioew_firebase.model.Contato
import com.example.agenda_contato_recyclevioew_firebase.recycle.ContatoAdapter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import okhttp3.*
import java.io.IOException

class ListagemActivity: AppCompatActivity() {
    private val lista = ArrayList<Contato>()
    private val gson = Gson()
    private val clientHttp = OkHttpClient()
    private lateinit var rcvContatos: RecyclerView
    private lateinit var adapter: ContatoAdapter

    override fun onCreate(bundle: Bundle?) {
        super.onCreate(bundle)
        setContentView(R.layout.listagem_layout)

        val btnFormulario = findViewById<Button>(R.id.btnFormulario)
        btnFormulario.setOnClickListener {
            val intent = Intent(this, FormularioActivity::class.java)
            startActivity(intent)
        }

        rcvContatos = findViewById(R.id.rcvContatos)
        adapter = ContatoAdapter(this, lista)
        rcvContatos.adapter = adapter
        rcvContatos.layoutManager = LinearLayoutManager(this)

        lista.add(Contato("Breno", "(11)96064-1538", "breno@gmail.com"))
        adapter.notifyDataSetChanged()
    }

    override fun onStart() {
        super.onStart()
        val request = Request.Builder()
            .get()
            .url("https://fatec-2024-1s-pdmi-default-rtdb.firebaseio.com/agenda.json")
            .build()
        val response = object : Callback {
            override fun onFailure(call: Call?, e: IOException?) {
                Log.e("AGENDA-CONTATO", e?.message.toString())
            }
            override fun onResponse(call: Call?, response: Response?) {
                Log.i("AGENDA-CONTATO", "Dados recebidos convertendo")
                val body = response?.body()
                val type = object : TypeToken<HashMap<String?, Contato?>?>() {}.type
                val myMap: HashMap<String, Contato> = gson.fromJson(body?.string(), type)
                val listaTemp = ArrayList<Contato>()
                myMap.values.forEach {
                    Log.i("AGENDA-CONTATO", "Contato: $it")
                    listaTemp.add(it)
                }
                this@ListagemActivity.runOnUiThread(
                    java.lang.Runnable {
                        lista.clear()
                        lista.addAll(listaTemp)
                        rcvContatos.adapter?.notifyDataSetChanged()
                    }
                )
            }
        }
        clientHttp.newCall(request).enqueue(response)
    }


}
