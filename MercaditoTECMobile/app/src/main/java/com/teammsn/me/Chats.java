package com.teammsn.me;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

import com.teammsn.mercaditotecmobile.MainActivity;
import com.teammsn.mercaditotecmobile.R;

public class Chats extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase.
     *
     * @param home:
     */

    ImageView home;

    /**
     * Metodo que se encarga de inicializar la actividad de la vista.
     *
     * @param savedInstanceState
     */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chats);

        // Se inicializan las variables con los valores correspondientes a su ID en la vista.
        home = (ImageView) findViewById(R.id.home);

        // Se asigna la funcionalidad al icono.
        home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
            }
        });
    }
}