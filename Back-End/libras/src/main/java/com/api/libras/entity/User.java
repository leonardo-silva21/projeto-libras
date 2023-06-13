package com.api.libras.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome_completo")
    private String nomeCompleto;

    @Column(name = "cpf")
    private Long cpf;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;
}
