<template>
  <div>

    <h1>Margin Utility</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>The margin utility controls the margin of an element.</p>

          <figure>
            <div class="content">
              <div class="table-scrollable">
                <table class="--margin-bottom-0">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Properties</th>
                    </tr>
                  </thead>
                  <tbody>

                    <template v-for="margin in margins">
                      <tr>
                        <td>--padding-{{ margin.key }}</td>
                        <td>padding: {{ margin.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-y-{{ margin.key }}</td>
                        <td>padding-bottom: {{ margin.value }}; padding-top: {{ margin.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-x-{{ margin.key }}</td>
                        <td>padding-left: {{ margin.value }}; padding-right: {{ margin.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-top-{{ margin.key }}</td>
                        <td>padding-top: {{ margin.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-right-{{ margin.key }}</td>
                        <td>padding-right: {{ margin.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-bottom-{{ margin.key }}</td>
                        <td>padding-bottom: {{ margin.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-left-{{ margin.key }}</td>
                        <td>padding-left: {{ margin.value }};</td>
                      </tr>
                    </template>

                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        margins: [
          {key: 'auto', value: 'auto'},
          {key: '0', value: '0'},
          {key: '1', value: '0.25rem'},
          {key: '2', value: '0.5rem'},
          {key: '3', value: '0.75rem'},
          {key: '4', value: '1rem'},
          {key: '5', value: '1.25rem'},
          {key: '6', value: '1.5rem'},
          {key: '8', value: '2rem'},
          {key: '10', value: '2.5rem'},
          {key: '12', value: '3rem'},
          {key: '16', value: '4rem'},
          {key:'px', value: '1px'}
        ]
      }
    }
  }
</script>
