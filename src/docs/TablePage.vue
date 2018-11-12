<template>
<container class="mt-5">
  <row class="mt-5 align-items-center justify-content-start">
    <h4 style="margin: 0" class="grey-text"><strong>Tables</strong></h4>
    <a href="https://mdbootstrap.com/docs/vue/tables/additional/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
  </row>
  <hr />
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

		<h3>Table fixed header</h3>
		<tbl class="fixed-header">
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
				<tr scope="row">
					<td>3</td>
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
				<tr scope="row">
					<td>3</td>
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
				<tr scope="row">
					<td>3</td>
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
				<tr scope="row">
					<td>3</td>
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
				</tr>
			</tbl-body>
		</tbl>		

		<h3 class="mt-5">Table fixed column</h3>
		<tbl class="fixed-column">
			<tbl-head>
				<tr>
					<th>thead col 1</th>
					<th>thead col 2</th>
					<th>thead col 3</th>
					<th>thead col 4</th>
					<th>thead col 5</th>
					<th>thead col 6</th>
					<th>thead col 7</th>
					<th>thead col 8</th>
					<th>thead col 9</th>
					<th>thead col 10</th>
					<th>thead col 11</th>
					<th>thead col 12</th>
					<th>thead col 13</th>
					<th>thead col 14</th>
					<th>thead col 15</th>
					<th>thead col 16</th>
					<th>thead col 17</th>
					<th>thead col 18</th>
				</tr>
			</tbl-head>
			<tbl-body>
				<tr scope="row">
					<td>tbody col 1</td>
					<td>tbody col 2</td>
					<td>tbody col 3</td>
					<td>tbody col 4</td>
					<td>tbody col 5</td>
					<td>tbody col 6</td>
					<td>tbody col 7</td>
					<td>tbody col 8</td>
					<td>tbody col 9</td>
					<td>tbody col 10</td>
					<td>tbody col 11</td>
					<td>tbody col 12</td>
					<td>tbody col 13</td>
					<td>tbody col 14</td>
					<td>tbody col 15</td>
					<td>tbody col 16</td>
					<td>tbody col 17</td>
					<td>tbody col 18</td>
				</tr>
			</tbl-body>
		</tbl>		

	</div>
</container>
</template>

<script>
import { Tbl, TblHead, TblBody, Fa, Container, Row } from 'mdbvue';

export default {
  name: 'TablePage',
  components: {
    Tbl,
    TblHead,
    TblBody,
    Row,
    Fa,
    Container
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fixed-header .table {
	width: auto;
}

.fixed-header thead {
	display: block;
	position: relative;
}

.fixed-header tbody {
	display: block;
	height: 200px;
	overflow-y: scroll; 
}

.fixed-column {
	overflow-x: scroll; 
	margin-left: 100px;
}

.fixed-column td, .fixed-column th {
	white-space: nowrap;
}

.fixed-column tr th:first-child, .fixed-column tr td:first-child {
	position: absolute;
	width: 100px;
  left: 100px;
	top: auto;
	margin-top: -1px;
}

</style>
