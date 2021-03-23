<template>
  <div>

    <h1>Padding Utility</h1>

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
          <p>The padding utility controls the padding of an element.</p>

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

                    <template v-for="padding in paddings">
                      <tr>
                        <td>--padding-{{ padding.key }}</td>
                        <td>padding: {{ padding.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-y-{{ padding.key }}</td>
                        <td>padding-bottom: {{ padding.value }}; padding-top: {{ padding.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-x-{{ padding.key }}</td>
                        <td>padding-left: {{ padding.value }}; padding-right: {{ padding.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-top-{{ padding.key }}</td>
                        <td>padding-top: {{ padding.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-right-{{ padding.key }}</td>
                        <td>padding-right: {{ padding.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-bottom-{{ padding.key }}</td>
                        <td>padding-bottom: {{ padding.value }};</td>
                      </tr>
                      <tr>
                        <td>--padding-left-{{ padding.key }}</td>
                        <td>padding-left: {{ padding.value }};</td>
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
        paddings: [
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
