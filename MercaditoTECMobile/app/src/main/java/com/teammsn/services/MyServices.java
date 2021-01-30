package com.teammsn.services;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;

import com.teammsn.mercaditotecmobile.MainActivity;
import com.teammsn.mercaditotecmobile.R;

public class MyServices extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase.
     *
     * @param home:
     */

    ImageView home;
    ImageButton add;

    /**
     * Metodo que se encarga de inicializar la actividad de la vista.
     *
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_services);

        // Se inicializan las variables con los valores correspondientes a su ID en la vista.
        home = (ImageView) findViewById(R.id.home);
        add = (ImageButton) findViewById(R.id.add);

        // Se asigna la funcionalidad al icono.
        home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
            }
        });

        // Se asigna la funcionalidad al icono.
        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), AddService.class));
            }
        });
    }
}