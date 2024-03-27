package com.example.kotlinapp1

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class ConversorActivity : AppCompatActivity(){
    override fun onCreate(bundle: Bundle?){
        super.onCreate(bundle);
        setContentView(R.layout.conversor_layout);

        val btnConverter = findViewById<Button>( R.id.btnConverter);
        val editTextMoeda = findViewById<EditText>( R.id.editTextMoeda);
        val editTextCot = findViewById<EditText>( R.id.editTextCot);
        val txtResultado = findViewById<TextView>(R.id.txtResultado);

        btnConverter.setOnClickListener{
            val moeda =  editTextMoeda.text.toString().toFloat();
            val cotacao = editTextCot.text.toString().toFloat();
            val resultado = moeda * cotacao;

            txtResultado.text = "Resultado : ${resultado}"
        }

    }
}