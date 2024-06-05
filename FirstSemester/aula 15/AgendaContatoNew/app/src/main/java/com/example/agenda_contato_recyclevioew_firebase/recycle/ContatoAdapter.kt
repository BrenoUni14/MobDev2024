package com.example.agenda_contato_recyclevioew_firebase.recycle

import android.content.Context
import android.util.Log
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.agenda_contato_recyclevioew_firebase.R
import com.example.agenda_contato_recyclevioew_firebase.Repository.ContatoRepository
import com.example.agenda_contato_recyclevioew_firebase.model.Contato

class ContatoAdapter(val contexto : Context, val lista : ArrayList<Contato>) :
    RecyclerView.Adapter<ContatoViewHolder>() {

    var inflater: LayoutInflater = LayoutInflater.from(contexto)
    private var repositorio = ContatoRepository()
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ContatoViewHolder {
        val view = inflater.inflate(
            R.layout.contato_row_layout,
            parent, false)
        return ContatoViewHolder( view )
    }

    override fun getItemCount(): Int {
        return lista.size
    }

    override fun onBindViewHolder(holder: ContatoViewHolder, position: Int) {
        val contato = lista[position]
        holder.txtNome.text = contato.nome
        holder.txtTelefone.text = contato.telefone
        holder.txtEmail.text = contato.email
        holder.btnDelete.setOnClickListener{
            Log.i("AGENDA-CONTATO", "Contato selecionado para apagar: $contato")
            repositorio.apagarContato(contato)
        }
    }
}