package com.example.restaurantapp

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.restaurante_item_layout.view.*

class RestauranteAdapter(private val listaRestaurantes: List<Restaurante>) :
    RecyclerView.Adapter<RestauranteViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RestauranteViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.restaurante_item_layout, parent, false)
        return RestauranteViewHolder(view)
    }

    override fun onBindViewHolder(holder: RestauranteViewHolder, position: Int) {
        val restaurante = listaRestaurantes[position]
        holder.bind(restaurante)
    }

    override fun getItemCount(): Int {
        return listaRestaurantes.size
    }
}

class RestauranteViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    fun bind(restaurante: Restaurante) {
        itemView.apply {
            textViewNome.text = restaurante.nome
            textViewTipoComida.text = restaurante.tipoComida
        }
    }
}