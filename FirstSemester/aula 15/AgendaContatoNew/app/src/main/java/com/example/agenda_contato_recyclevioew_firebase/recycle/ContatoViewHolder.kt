package com.example.agenda_contato_recyclevioew_firebase.recycle

import android.view.View
import android.widget.Button
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.agenda_contato_recyclevioew_firebase.R


class ContatoViewHolder(view : View) : RecyclerView.ViewHolder(view) {
    var txtNome : TextView
    var txtTelefone : TextView
    var txtEmail : TextView
    var btnDelete : Button
    init {

        txtNome = view.findViewById(R.id.txtRowNome)
        txtTelefone = view.findViewById(R.id.txtRowTelefone)
        txtEmail = view.findViewById(R.id.txtRowEmail)
        btnDelete = view.findViewById(R.id.btnRowdelete)
    }
}