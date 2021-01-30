package com.teammsn.mercaditotecmobile;

import androidx.appcompat.app.AppCompatActivity;

public class Constants extends AppCompatActivity {

    public String URL = "https://localhost:44391/";


    public int id;
    public String email, nombreCompleto;

    private static Constants instancia = null;

    private Constants() {
    }

    public static Constants getInstance() {
        if (instancia == null)
            instancia = new Constants();
        return instancia;
    }

    public String getURL() {
        return URL;
    }

}
