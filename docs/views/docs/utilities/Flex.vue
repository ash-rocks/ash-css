<template>
  <div>

    <h1>Flex Utilities</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#flex"># Flex</a>
            <ul>
              <li><a href="#direction"># Direction</a></li>
              <li><a href="#grow"># Grow</a></li>
              <li><a href="#order"># Order</a></li>
              <li><a href="#shrink"># Shrink</a></li>
              <li><a href="#wrap"># Wrap</a></li>
            </ul>
          </li>
          <li><a href="#alignment"># Alignment</a>
            <ul>
              <li><a href="#align-content"># Align Content</a></li>
              <li><a href="#align-items"># Align Items</a></li>
              <li><a href="#align-self"># Align Self</a></li>
              <li><a href="#justify-content"># Justify Content</a></li>
              <li><a href="#justify-items"># Justify Items</a></li>
              <li><a href="#justify-self"># Justify Self</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="flex" class="jump"><a href="#flex"># Flex</a></h2>
          <p>The flex utility controls how flex items grow and shrink.</p>
          <div class="alert -primary" role="alert">
            <div class="content">
              All flex utilities should be preceded by the <code>--flex</code> utility, where applicable, in order for them to function properly. All flex utilities have responsive variants for each breakpoint. Use <code>--xs-{utility}</code>, <code>--sm-{utility}</code>, <code>--md-{utility}</code>, <code>--lg-{utility}</code>, <code>--xl-{utility}</code>.
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
                      <td>--flex-all</td>
                      <td>flex: 1 1 0%;</td>
                    </tr>
                    <tr>
                      <td>--flex-auto</td>
                      <td>flex: 1 1 auto;</td>
                    </tr>
                    <tr>
                      <td>--flex-initial</td>
                      <td>flex: 0 1 auto;</td>
                    </tr>
                    <tr>
                      <td>--flex-none</td>
                      <td>flex: none;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="direction" class="jump"><a href="#direction"># Direction</a></h2>
          <p>The flex direction utility controls the direction of flex items.</p>

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
                      <td>--flex-row</td>
                      <td>flex-direction: row;</td>
                    </tr>
                    <tr>
                      <td>--flex-row-reverse</td>
                      <td>flex-direction: row-reverse;</td>
                    </tr>
                    <tr>
                      <td>--flex-column</td>
                      <td>flex-direction: column;</td>
                    </tr>
                    <tr>
                      <td>--flex-column-reverse</td>
                      <td>flex-direction: column-reverse;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="grow" class="jump"><a href="#grow"># Grow</a></h2>
          <p>The flex grow utility controls how flex items grow.</p>

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
                      <td>--flex-grow-0</td>
                      <td>flex-grow: 0;</td>
                    </tr>
                    <tr>
                      <td>--flex-grow</td>
                      <td>flex-grow: 1;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="order" class="jump"><a href="#order"># Order</a></h2>
          <p>The flex order utility controls the order of flex items.</p>

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
                      <td>--flex-order-1</td>
                      <td>order: 1;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-2</td>
                      <td>order: 2;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-3</td>
                      <td>order: 3;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-4</td>
                      <td>order: 4;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-5</td>
                      <td>order: 5;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-6</td>
                      <td>order: 6;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-7</td>
                      <td>order: 7;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-8</td>
                      <td>order: 8;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-9</td>
                      <td>order: 9;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-10</td>
                      <td>order: 10;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-11</td>
                      <td>order: 11;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-12</td>
                      <td>order: 12;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-first</td>
                      <td>order: -9999;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-last</td>
                      <td>order: 9999;</td>
                    </tr>
                    <tr>
                      <td>--flex-order-0</td>
                      <td>order: 0;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="shrink" class="jump"><a href="#shrink"># Shrink</a></h2>
          <p>The flex shrink utility controls how flex items shrinks.</p>

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
                      <td>--flex-shrink-0</td>
                      <td>flex-shrink: 0;</td>
                    </tr>
                    <tr>
                      <td>--flex-shrink</td>
                      <td>flex-shrink: 1;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="wrap" class="jump"><a href="#wrap"># Wrap</a></h2>
          <p>The flex wrap utility controls how flex items wrap.</p>

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
                      <td>--flex-wrap</td>
                      <td>flex-wrap: wrap;</td>
                    </tr>
                    <tr>
                      <td>--flex-wrap-reverse</td>
                      <td>flex-wrap: wrap-reverse;</td>
                    </tr>
                    <tr>
                      <td>--flex-nowrap</td>
                      <td>flex-wrap: nowrap;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="alignment" class="jump"><a href="#alignment"># Alignment</a></h2>
          <p>You can change the alignments of flex rows and items by using the following alignment utilities:</p>
        </section>

        <section>
          <h2 id="align-content" class="jump"><a href="#align-content"># Align Content</a></h2>
          <p>The align content utility controls how flex rows are positioned vertically inside the flex containers. This utility is used on the flex containers themselves.</p>

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
                      <td>--content-around</td>
                      <td>align-content: space-around;</td>
                    </tr>
                    <tr>
                      <td>--content-between</td>
                      <td>align-content: space-between;</td>
                    </tr>
                    <tr>
                      <td>--content-center</td>
                      <td>align-content: center;</td>
                    </tr>
                    <tr>
                      <td>--content-end</td>
                      <td>align-content: flex-end;</td>
                    </tr>
                    <tr>
                      <td>--content-evenly</td>
                      <td>align-content: space-evenly;</td>
                    </tr>
                    <tr>
                      <td>--content-start</td>
                      <td>align-content: flex-start;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="align-items" class="jump"><a href="#align-items"># Align Items</a></h2>
          <p>The align items utility controls how flex items are positioned vertically inside flex containers. This utility is used on the flex containers themselves.</p>

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
                      <td>--items-baseline</td>
                      <td>align-items: baseline;</td>
                    </tr>
                    <tr>
                      <td>--items-center</td>
                      <td>align-items: center;</td>
                    </tr>
                    <tr>
                      <td>--items-end</td>
                      <td>align-items: flex-end;</td>
                    </tr>
                    <tr>
                      <td>--items-start</td>
                      <td>align-items: flex-start;</td>
                    </tr>
                    <tr>
                      <td>--items-stretch</td>
                      <td>align-items: stretch;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="align-self" class="jump"><a href="#align-self"># Align Self</a></h2>
          <p>The align self utility controls how flex items are positioned vertically inside flex containers or rows. This utility is used on the flex items themselves.</p>

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
                      <td>--self-auto</td>
                      <td>align-self: auto;</td>
                    </tr>
                    <tr>
                      <td>--self-center</td>
                      <td>align-self: center;</td>
                    </tr>
                    <tr>
                      <td>--self-end</td>
                      <td>align-self: flex-end;</td>
                    </tr>
                    <tr>
                      <td>--self-start</td>
                      <td>align-self: flex-start;</td>
                    </tr>
                    <tr>
                      <td>--self-stretch</td>
                      <td>align-self: stretch;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="justify-content" class="jump"><a href="#justify-content"># Justify Content</a></h2>
          <p>The justify content utility controls how flex rows are positioned horizontally inside the flex containers. This utility is used on the flex containers themselves.</p>

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
                      <td>--justify-around</td>
                      <td>justify-content: space-around;</td>
                    </tr>
                    <tr>
                      <td>--justify-between</td>
                      <td>justify-content: space-between;</td>
                    </tr>
                    <tr>
                      <td>--justify-center</td>
                      <td>justify-content: center;</td>
                    </tr>
                    <tr>
                      <td>--justify-end</td>
                      <td>justify-content: flex-end;</td>
                    </tr>
                    <tr>
                      <td>--justify-evenly</td>
                      <td>justify-content: space-evenly;</td>
                    </tr>
                    <tr>
                      <td>--justify-start</td>
                      <td>justify-content: flex-start;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="justify-items" class="jump"><a href="#justify-items"># Justify Items</a></h2>
          <p>The justify items utility controls how flex items are positioned horizontally inside flex containers. This utility is used on the flex containers themselves.</p>

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
                      <td>--justify-items-auto</td>
                      <td>justify-items: auto;</td>
                    </tr>
                    <tr>
                      <td>--justify-items-center</td>
                      <td>justify-items: center;</td>
                    </tr>
                    <tr>
                      <td>--justify-items-end</td>
                      <td>justify-items: end;</td>
                    </tr>
                    <tr>
                      <td>--justify-items-start</td>
                      <td>justify-items: start;</td>
                    </tr>
                    <tr>
                      <td>--justify-items-stretch</td>
                      <td>justify-items: stretch;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="justify-self" class="jump"><a href="#justify-self"># Justify Self</a></h2>
          <p>The justify self utility controls how flex items are positioned horizontally inside flex containers or rows. This utility is used on the flex items themselves.</p>

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
                      <td>--justify-self-auto</td>
                      <td>justify-self: auto;</td>
                    </tr>
                    <tr>
                      <td>--justify-self-center</td>
                      <td>justify-self: center;</td>
                    </tr>
                    <tr>
                      <td>--justify-self-end</td>
                      <td>justify-self: flex-end;</td>
                    </tr>
                    <tr>
                      <td>--justify-self-start</td>
                      <td>justify-self: flex-start;</td>
                    </tr>
                    <tr>
                      <td>--justify-self-stretch</td>
                      <td>justify-self: stretch;</td>
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
