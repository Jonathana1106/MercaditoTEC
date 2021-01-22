package com.teammsn.me;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Dialog;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import com.teammsn.mercaditotecmobile.MainActivity;
import com.teammsn.mercaditotecmobile.R;

public class Profile extends AppCompatActivity {

    /**
     * Se crean las variables locales de la clse.
     *
     * @param home:
     * @param dialog:
     */

    ImageView home;
    Dialog dialog;

    /**
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        // Se inicializan las variables con sus valores correspondientes a su ID en la vista.
        home = (ImageView) findViewById(R.id.home);
        //edit = (ImageButton) findViewById(R.id.edit);
        dialog = new Dialog(this);

        // Se asigna la funcionalidad al icono.
        home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), MainActivity.class));
            }
        });
    }

    /**
     * Metodo que se encarga de desplegar la el pop up de editar la iformacion del perfil y la
     * informacion almacenada en ella.
     *
     * @param v
     */
    public void editProfile(View v) {

        /**
         * Variables de la vista
         *
         * @param txtclose
         * @param txtsave
         */
        TextView txtclose, txtsave;

        dialog.setContentView(R.layout.edit_profile);

        // Se inicializan las variables con los valores correspondientes a su ID en el pop up.
        txtclose = (TextView) dialog.findViewById(R.id.close);

        txtclose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        dialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        dialog.show();

    }

    /**
     * Metodo que se encarga de desplegar el pop up de eliminar cuenta y la informacion almacenada
     * en ella.
     *
     * @param v
     */
    public void deleteAccount(View v) {

        /**
         * Variables de la vista.
         *
         * @param: txtclose
         * @param: txtaccept
         */
        TextView txtclose, txtaccept;

        dialog.setContentView(R.layout.delete_account);

        // Se inicializan las variables con los valores correspondientes a su ID en el pop up.
        txtclose = (TextView) dialog.findViewById(R.id.close);
        txtaccept = (TextView) dialog.findViewById(R.id.accept);

        txtclose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        txtaccept.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        dialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        dialog.show();
    }
}