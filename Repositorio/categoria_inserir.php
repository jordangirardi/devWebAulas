<?php
	require "config.php";
	
	//recupera os dados enviados do front
	$categoria = $_GET["categoria"];
	$sql = "insert into tb_categoria (categoria) values (:categoria)";
	$query = $connection->prepare($sql);

	//atribui valor a chave para inserção
	$query->bindParam(":categoria",$categoria, PDO::PARAM_STR);
	$query->execute();

	$result = $query->rowCount();

	//http://localhost/Site_Aulas/Repositorio/categoria_inserir.php?categoria=Combustível

?>