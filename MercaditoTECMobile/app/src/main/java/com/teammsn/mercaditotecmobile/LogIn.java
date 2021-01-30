package com.teammsn.mercaditotecmobile;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class LogIn extends AppCompatActivity {

    /**
     * Se crean las variables globales de la clase.
     *
     * @param email:
     * @param password:
     * @param signup:
     * @param signin:
     * @param: firebaseAuth;
     */
    EditText email, password;
    TextView signup;
    Button signin;
    FirebaseAuth firebaseAuth;

    /**
     * Metodo que se encarga de inicializar la actividad de la vista.
     *
     * @param savedInstanceState
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);

        // Se inicializan las variables globales de la clase y se ligan al ID de la vista.
        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        signin = (Button) findViewById(R.id.btnsignin);
        signup = (TextView) findViewById(R.id.btnsignup);
        firebaseAuth = FirebaseAuth.getInstance();

        // Se asigna la funcionalidad del boton iniciar sesion.
        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String semail = email.getText().toString().trim();
                String spassword = password.getText().toString().trim();

                if (TextUtils.isEmpty(semail)) {
                    email.setError("Es necesario que ingrese su correo.");
                    return;
                }
                if (TextUtils.isEmpty(spassword)) {
                    password.setError("Por favor ingrese su contraseña.");
                    return;
                }
                firebaseAuth.signInWithEmailAndPassword(semail, spassword).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            Toast.makeText(LogIn.this, "Inicio de sesión exitoso", Toast.LENGTH_SHORT).show();
                            startActivity(new Intent(getApplicationContext(), MainActivity.class));
                        } else {
                            Toast.makeText(LogIn.this, "Los datos ingresados son incorrectos.", Toast.LENGTH_SHORT).show();
                        }
                    }
                });
            }
        });

        // Se asigna funcionalidad al texto de crear cuenta.
        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getApplicationContext(), SignUp.class));
            }
        });

    }
}