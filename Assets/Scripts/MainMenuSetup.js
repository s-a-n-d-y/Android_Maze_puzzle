﻿#pragma strict

function Start () {
	PlayerPrefs.SetInt("attempts", 0);
}

function Update () {

}

function ChangeScene (scene : String) {
	Application.LoadLevel(scene);
}