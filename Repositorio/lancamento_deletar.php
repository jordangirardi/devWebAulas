<?php

	require "config.php";

	$IdLancamento = $_GET["IdLancamento"];

	$sql = "delete from tb_lancamento where IdLancamento = :IdLancamento";
	$query = $connection->prepare($sql);

	$query->bindParam(":IdLancamento",$IdLancamento,PDO::PARAM_STR); 
	
	$query->execute();

	$dados = $query->fetchAll(PDO::FETCH_OBJ);

	//http://localhost/Site_Aulas/Repositorio/lancamento_deletar.php?IdLancamento=2
	
?>