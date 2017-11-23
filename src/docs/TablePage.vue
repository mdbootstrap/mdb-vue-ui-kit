<template>
  <tbl striped bordered dark hover responsive-lg>
  	<tbl-head>
  		<tr>
			<th>thead col 1</th>
			<th>thead col 2</th>
			<th>thead col 3</th>
			<th>thead col 4</th>
  		</tr>
  	</tbl-head>
  	<tbl-body>
  		<tr>
			<td>tbody col 1</td>
			<td>tbody col 2</td>
			<td>tbody col 3</td>
			<td>tbody col 4</td>
  		</tr>
   		<tr>
			<td>tbody col 1</td>
			<td>tbody col 2</td>
			<td>tbody col 3</td>
			<td>tbody col 4</td>
  		</tr>
   		<tr>
			<td colspan="4">tbody col wide</td>
  		</tr>
  	</tbl-body>
  </tbl>
</template>

<script>
import table from '@/components/Table';
import tableHead from '@/components/TableHead';
import tableBody from '@/components/TableBody';

export default {
  name: 'TablePage',
  components: {
    'tbl': table,
    'tblHead': tableHead,
    'tblBody': tableBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
