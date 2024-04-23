package com.example.restaurantapp

import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.android.synthetic.main.activity_listagem_restaurantes.*

class ListaRestauranteActivity : AppCompatActivity() {
    private lateinit var sharedPreferences: SharedPreferences
    private var listaRestaurantes: MutableList<Restaurante> = mutableListOf()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_listagem_restaurantes)

        sharedPreferences = getSharedPreferences("restaurantes_prefs", Context.MODE_PRIVATE)

        textViewTituloListagem.text = "Lista de Restaurantes"

        carregarPrefs()
        setupRecyclerView()
    }

    private fun carregarPrefs() {
        val listaJson = sharedPreferences.getString("listaRestaurantes", null)
        val type = object : TypeToken<MutableList<Restaurante>>() {}.type
        listaRestaurantes = Gson().fromJson(listaJson, type) ?: mutableListOf()
    }

    private fun setupRecyclerView() {
        val adapter = RestauranteAdapter(listaRestaurantes)
        recyclerViewRestaurantes.layoutManager = LinearLayoutManager(this)
        recyclerViewRestaurantes.adapter = adapter
    }
}