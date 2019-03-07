<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Table Responsive
</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/tables/responsive/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="mt-5 pt-5 mx-3">
      <h1>Table responsvie</h1>
      <br />
      <h3>Always responsive</h3>
      <br />
      <mdb-tbl responsive>
        <mdb-tbl-head color="primary-color" textWhite>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Breakpoint specific</h3>
      <br />
      <mdb-tbl responsiveSm>
        <mdb-tbl-head color="default-color" textWhite>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <mdb-tbl responsiveMd>
        <mdb-tbl-head color="light">
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <mdb-tbl responsiveLg>
        <mdb-tbl-head color="dark">
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <mdb-tbl responsiveXl>
        <mdb-tbl-head color="danger-color" textWhite>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Table columns with auto width</h3>
      <br />
      <mdb-tbl responsive autoWidth>
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Table columns with minimal width</h3>
      <br />
      <mdb-tbl responsive>
        <mdb-tbl-head color="secondary-color">
          <tr>
            <th class="th-lg">#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <mdb-tbl responsive>
        <mdb-tbl-head color="primary-color" textWhite>
          <tr>
            <th class="th-sm">#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Table columns with fixed width</h3>
      <br />
      <mdb-tbl responsive fixed>
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </div>
  </mdb-container>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbContainer, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'TableResponsivePage',
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbIcon,
    mdbContainer,
    mdbRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
