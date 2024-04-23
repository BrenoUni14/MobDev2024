package com.example.restaurantapp
data class Restaurante(
    val id: Long,
    val nome: String,
    val endereco: String,
    val latitude: Double,
    val longitude: Double,
    val tipoComida: String,
    val classificacao: Int,
    val descricao: String
)
