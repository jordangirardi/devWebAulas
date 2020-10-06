<?php

	require "config.php";
	
	//recupera os dados enviados do front
	$IdLancamento = $_GET["IdLancamento"];
	$Valor = $_GET["Valor"];
	$Descricao = $_GET["Descricao"];

	$sql = "update tb_lancamento set Descricao = :Descricao, Valor=:Valor where IdLancamento = :IdLancamento ";
	$query = $connection->prepare($sql);

	//atribui valor a chave para inserção
	$query->bindParam(":Descricao",$Descricao, PDO::PARAM_STR);
	$query->bindParam(":Valor",$Valor, PDO::PARAM_STR);
	$query->bindParam(":IdLancamento",$IdLancamento, PDO::PARAM_STR);

	$query->execute();

	//http://localhost/Site_Aulas/Repositorio/lancamento_alterar.php?IdLancamento=1&Valor=1500&Descricao=Farmácia

?>