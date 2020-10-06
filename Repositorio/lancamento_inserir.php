<?php

	require "config.php";
	
	//recupera os dados enviados do front
	$IsEntrada = $_GET["IsEntrada"];
	$Descricao = $_GET["Descricao"];
	$Valor = $_GET["Valor"];
	$IdCategoria = $_GET["IdCategoria"];

	$sql = "insert into tb_lancamento ( IsEntrada, Descricao, Valor, IdCategoria) values (:IsEntrada, :Descricao, :Valor, :IdCategoria)";
	$query = $connection->prepare($sql);

	//atribui valor a chave para inserção
	$query->bindParam(":IsEntrada",$IsEntrada, PDO::PARAM_STR);
	$query->bindParam(":Descricao",$Descricao, PDO::PARAM_STR);
	$query->bindParam(":Valor",$Valor, PDO::PARAM_STR);
	$query->bindParam(":IdCategoria",$IdCategoria, PDO::PARAM_STR);

	$query->execute();

	//http://localhost/Site_Aulas/Repositorio/lancamento_inserir.php?IsEntrada=true&Descricao=Salario&Valor=1000&IdCategoria=1


?>