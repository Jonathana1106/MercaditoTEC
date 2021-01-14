package com.teammsn.mercaditotecmobile;

import android.content.ContentValues;
import android.content.Context;
import android.database.DatabaseErrorHandler;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

public class DBHelper extends SQLiteOpenHelper {

    public static final String DBNAME = "Login.db";

    public DBHelper(Context context) {
        super(context, "Login.db", null, 1);
    }


    @Override
    public void onCreate(SQLiteDatabase DATIC) {
        DATIC.execSQL("CREATE TABLE USERS(correoinstitucional TEXT PRIMARY KEY, password TEXT)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase DATIC, int oldVersion, int newVersion) {
        DATIC.execSQL("DROP TABLE IF EXISTS USERS");
    }

    public Boolean insertData(String correoinstitucional, String password) {
        SQLiteDatabase DATIC = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put("correoinstitucional", correoinstitucional);
        contentValues.put("password", password);
        long result = DATIC.insert("USERS", null, contentValues);
        if(result == -1) {
            return  false;
        }
        else {
            return  true;
        }
    }

    public Boolean chechemail(String correoinstitucional) {
     return false;
    }
}
