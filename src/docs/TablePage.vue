<template>
	<div class="mt-5 pt-5 mx-3">
		<h3>Basic example</h3>
		<br />
		<tbl>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Table head options</h3>
		<br />
		<tbl>
			<tbl-head color="primary-color" textWhite>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Striped rows</h3>
		<br />
		<tbl striped>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Bordered table</h3>
		<br />
		<tbl bordered>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Borderless table</h3>
		<br />
		<tbl borderless>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Hoverable rows</h3>
		<br />
		<tbl hover>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Small table</h3>
		<br />
		<tbl sm>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>

		<h3>Captions</h3>
		<br />
		<tbl>
			<caption>Example caption</caption>
			<tbl-head>
				<tr>
					<th>#</th>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row"> 
					<td>1</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>2</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>
	</div>
</template>

<script>
import { Tbl, TblHead, TblBody } from 'mdbvue';

export default {
  name: 'TablePage',
  components: {
    Tbl,
    TblHead,
    TblBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
