<?php

	require "config.php";

	$sql = "select * from tb_categoria order by categoria";
	$query = $connection->prepare($sql);
	$query->execute();

	$dados = $query->fetchAll(PDO::FETCH_OBJ);

	echo json_encode($dados);

	//http://localhost/Site_Aulas/Repositorio/categoria_listar.php

?>