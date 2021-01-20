package com.teammsn.mercaditotecmobile;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

import java.nio.file.Files;

public class SignUp extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase.
     *
     * @param name:
     * @param lastname:
     * @param phone:
     * @param carnet:
     * @param email:
     * @param password:
     * @param signup:
     * @param passicon:
     * @param backArrow:
     * @param firebaseAuth:
     */

    EditText name, lastname, phone, carnet, email, password;
    Button signup;
    ImageView backArrow;
    ImageButton passicon;
    FirebaseAuth firebaseAuth;

    /**
     * Metodo que se encarga de inicializar la actividad de la vista.
     *
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        // Se inicializan las variables con los valores correspondientes a su ID en la vista.
        name = (EditText) findViewById(R.id.name);
        lastname = (EditText) findViewById(R.id.lastname);
        phone = (EditText) findViewById(R.id.phone);
        carnet = (EditText) findViewById(R.id.carnet);
        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        signup = (Button) findViewById(R.id.btnsignup);
        backArrow = (ImageView) findViewById(R.id.backios);
        passicon = (ImageButton) findViewById(R.id.passicon);
        firebaseAuth = FirebaseAuth.getInstance();

        // Se comprueba si existe un usuario que haya iniciado sesion.
        if (firebaseAuth.getCurrentUser() != null) {
            startActivity(new Intent(getApplicationContext(), MainActivity.class));
            finish();
        }

        // Se asigna funcionalidad al boton de crear cuenta.
        signup.setOnClickListener(new View.OnClickListener() {

            /**
             * Metodo que se activa da dar click sobre este y que se encarga de verificar si la
             * informacion ingresasda es correcta o no, ademas de mostrar los mensajes de error
             * en cada caso.
             * @param v:
             */
            @Override
            public void onClick(View v) {
                // Variables del metodo.
                String semail = email.getText().toString().trim();
                String spassword = password.getText().toString().trim();

                // Mensajes de error para el correo y la contraseña.
                if (TextUtils.isEmpty(semail)) {
                    email.setError("Es necesario que ingrese un correo.");
                    return;
                }

                if (TextUtils.isEmpty(spassword)) {
                    password.setError("Es necesario que ingrese una contraseña.");
                    return;
                }
                if (spassword.length() < 8) {
                    password.setError("La contrasena debe tener un mínimo de 8 caracteres.");
                    return;
                }

                // Guarda los datos en FireBase o mostrar mensaje de error correspondiente.
                firebaseAuth.createUserWithEmailAndPassword(semail, spassword).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            Toast.makeText(SignUp.this, "Usuario registrado", Toast.LENGTH_SHORT).show();
                            startActivity(new Intent(getApplicationContext(), MainActivity.class));
                        } else {
                            Toast.makeText(SignUp.this, "Error ! " + task.getException().getMessage(), Toast.LENGTH_SHORT).show();
                        }
                    }
                });
            }
        });

        // Se asigna la funcionalidad al icono
        backArrow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), LogIn.class));
            }
        });

        // Se asigna la funcionalidad al icono de informacion de la contrasena
        passicon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(SignUp.this, "La contraseña debe ser la utilidaza en DATIC.", Toast.LENGTH_SHORT).show();
            }
        });
    }
}