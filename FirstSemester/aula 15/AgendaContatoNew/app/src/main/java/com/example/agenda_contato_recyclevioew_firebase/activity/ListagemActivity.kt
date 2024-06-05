package com.example.agenda_contato_recyclevioew_firebase.activity

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.agenda_contato_recyclevioew_firebase.R
import com.example.agenda_contato_recyclevioew_firebase.databinding.FormularioLayoutBinding
import com.example.agenda_contato_recyclevioew_firebase.databinding.ListagemLayoutBinding
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
    lateinit var rcvContatos: RecyclerView
    lateinit var adapter: ContatoAdapter
    lateinit var binding: ListagemLayoutBinding


    override fun onCreate(bundle: Bundle?) {
        super.onCreate(bundle)
        binding = ListagemLayoutBinding.inflate(layoutInflater)
       //setContentView(R.layout.listagem_layout)
        setContentView(binding.root)

        //val btnFormulario = findViewById<Button>(R.id.btnFormulario)
        val adapter = ContatoAdapter(this, lista)

        binding.apply {
            rcvContatos.adapter = adapter
            rcvContatos.layoutManager = LinearLayoutManager(this@ListagemActivity)
            btnFormulario.setOnClickListener {
                val intent = Intent(this@ListagemActivity, FormularioActivity::class.java)
                startActivity(intent)
            }
        }


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
                myMap.keys.forEach {
                    val contato = myMap[it]
                    if (contato != null){
                        contato.id = it
                        Log.i("AGENDA-CONTATO", "Contato: ${contato.id}")
                        listaTemp.add(contato)
                    }
                }

                this@ListagemActivity.runOnUiThread(
                    java.lang.Runnable {
                        lista.clear()
                        lista.addAll(listaTemp)
                        binding.rcvContatos.adapter?.notifyDataSetChanged()
                    }
                )
            }
        }
        clientHttp.newCall(request).enqueue(response)
    }


}
