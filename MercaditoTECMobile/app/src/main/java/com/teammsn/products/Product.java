package com.teammsn.products;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;

import com.teammsn.mercaditotecmobile.R;
import com.teammsn.services.MyServices;

public class Product extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase.
     *
     * @param backArrow:
     */

    ImageView backArrow;

    /**
     * Metodo que se encarga de inicializar la actividad de la vista.
     *
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product);

        // Se inicializan las variables con los valores correspondientes a su ID en la vista.
        backArrow = (ImageView) findViewById(R.id.backios);

        // Se asigna la funcionalidad al icono.
        backArrow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), Products.class));
            }
        });
    }
}