<template>
  <div>

    <h1>Display Utility</h1>

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
          <p>The display utility controls the display of an element.</p>
          <div class="alert -primary" role="alert">
            <div class="content">
              All display utilities have responsive variants for each breakpoint. Use <code>--xs-{utility}</code>, <code>--sm-{utility}</code>, <code>--md-{utility}</code>, <code>--lg-{utility}</code>, <code>--xl-{utility}</code>.
            </div>
          </div>

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
                    <tr>
                      <td>--block</td>
                      <td>display: block;</td>
                    </tr>
                    <tr>
                      <td>--inline-block</td>
                      <td>display: inline-block;</td>
                    </tr>
                    <tr>
                      <td>--inline</td>
                      <td>display: inline;</td>
                    </tr>
                    <tr>
                      <td>--flex</td>
                      <td>display: flex;</td>
                    </tr>
                    <tr>
                      <td>--inline-flex</td>
                      <td>display: inline-flex;</td>
                    </tr>
                    <tr>
                      <td>--table</td>
                      <td>display: table;</td>
                    </tr>
                    <tr>
                      <td>--table-row</td>
                      <td>display: table-row;</td>
                    </tr>
                    <tr>
                      <td>--table-cell</td>
                      <td>display: table-cell;</td>
                    </tr>
                    <tr>
                      <td>--hidden</td>
                      <td>display: none;</td>
                    </tr>
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
