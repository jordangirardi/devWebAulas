<?php

	require "config.php";

	$sql = "select * from tb_lancamento order by DataHora desc";
	$query = $connection->prepare($sql);
	$query->execute();

	$dados = $query->fetchAll(PDO::FETCH_OBJ);

	echo json_encode($dados);

	//http://localhost/Site_Aulas/Repositorio/lancamento_listar.php
?>