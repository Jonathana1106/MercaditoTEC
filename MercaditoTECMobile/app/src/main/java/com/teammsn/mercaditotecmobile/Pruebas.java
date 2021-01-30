package com.teammsn.mercaditotecmobile;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.provider.SyncStateContract;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.teammsn.mercaditotecmobile.Constants;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

public class Pruebas extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pruebas);
        TextView textView = (TextView) findViewById(R.id.text);
        //SolicitarProducto();
    }

    /**
     public void SolicitarProducto() {
     TextView textView = (TextView) findViewById(R.id.text);
     String url =  "https://ubicaciones.paginasweb.cr/provincias.json";
     RequestQueue queue = Volley.newRequestQueue(getApplicationContext());

     JsonObjectRequest getRequest = new JsonObjectRequest(Request.Method.GET,
     url,
     null,
     new Response.Listener<JSONObject>() {
    @Override public void onResponse(JSONObject response) {
    // display response
    Log.d("Response", response.getJSONObject().getString());
    System.out.println(response);
    }
    },
     new Response.ErrorListener() {
    @Override public void onErrorResponse(VolleyError error) {
    Log.d("Error.Response", error.toString());
    }
    }
     );
     queue.add(getRequest);
     }*/
}