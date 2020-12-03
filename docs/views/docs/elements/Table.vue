<template>
  <div>

    <h1>Tables</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#striped"># Striped</a></li>
          <li><a href="#hover"># Hover</a></li>
          <li><a href="#bordered"># Bordered</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#scrollable"># Scrollable</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Tables are classless by default</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <table>
              <thead>
                <tr>
                  <th>Episode</th>
                  <th>Title</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IV</td>
                  <td>A New Hope</td>
                  <td>May 25, 1977</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>The Empire Strikes Back</td>
                  <td>May 21, 1980</td>
                </tr>
                <tr>
                  <td>VI</td>
                  <td>Return of the Jedi</td>
                  <td>May 25, 1983</td>
                </tr>
              </tbody>
            </table>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Episode&lt;/th&gt;
      &lt;th&gt;Title&lt;/th&gt;
      &lt;th&gt;Release Date&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;IV&lt;/td&gt;
      &lt;td&gt;A New Hope&lt;/td&gt;
      &lt;td&gt;May 25, 1977&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;V&lt;/td&gt;
      &lt;td&gt;The Empire Strikes Back&lt;/td&gt;
      &lt;td&gt;May 21, 1980&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;VI&lt;/td&gt;
      &lt;td&gt;Return of the Jedi&lt;/td&gt;
      &lt;td&gt;May 25, 1983&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="striped" class="jump"><a href="#striped"># Striped</a></h2>
        <p>Use the <code>-striped</code> modifier to add zebra-striping to rows</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <table class="-striped">
              <thead>
                <tr>
                  <th>Episode</th>
                  <th>Title</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IV</td>
                  <td>A New Hope</td>
                  <td>May 25, 1977</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>The Empire Strikes Back</td>
                  <td>May 21, 1980</td>
                </tr>
                <tr>
                  <td>VI</td>
                  <td>Return of the Jedi</td>
                  <td>May 25, 1983</td>
                </tr>
              </tbody>
            </table>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;table class=&quot;-striped&quot;&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="hover" class="jump"><a href="#hover"># Hover</a></h2>
        <p>Use the <code>-hover</code> modifier to add a hover style to rows</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <table class="-hover">
              <thead>
                <tr>
                  <th>Episode</th>
                  <th>Title</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IV</td>
                  <td>A New Hope</td>
                  <td>May 25, 1977</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>The Empire Strikes Back</td>
                  <td>May 21, 1980</td>
                </tr>
                <tr>
                  <td>VI</td>
                  <td>Return of the Jedi</td>
                  <td>May 25, 1983</td>
                </tr>
              </tbody>
            </table>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;table class=&quot;-hover&quot;&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="bordered" class="jump"><a href="#bordered"># Bordered</a></h2>
        <p>Use the <code>-bordered</code> modifier to add borders on the table and cells</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <table class="-bordered">
              <thead>
                <tr>
                  <th>Episode</th>
                  <th>Title</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IV</td>
                  <td>A New Hope</td>
                  <td>May 25, 1977</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>The Empire Strikes Back</td>
                  <td>May 21, 1980</td>
                </tr>
                <tr>
                  <td>VI</td>
                  <td>Return of the Jedi</td>
                  <td>May 25, 1983</td>
                </tr>
              </tbody>
            </table>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;table class=&quot;-bordered&quot;&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
&lt;/table&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
        <p>Use the <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code> modifiers to style any table child. The <code>-dark</code> modifier can be added to the table</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <table class="-hover">
              <thead>
                <tr class="-dark">
                  <th>Class</th>
                  <th>Heading</th>
                  <th>Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr class="-primary">
                  <td>Primary</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="-success">
                  <td>Success</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="-warning">
                  <td>Warning</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="-danger">
                  <td>Danger</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr class="-light">
                  <td>Light</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;table class=&quot;-hover&quot;&gt;
  &lt;thead&gt;
    &lt;tr class=&quot;-dark&quot;&gt;
      &lt;th&gt;Class&lt;/th&gt;
      &lt;th&gt;Heading&lt;/th&gt;
      &lt;th&gt;Heading&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr class=&quot;-primary&quot;&gt;
      &lt;td&gt;Primary&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class=&quot;-success&quot;&gt;
      &lt;td&gt;Success&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class=&quot;-warning&quot;&gt;
      &lt;td&gt;Warning&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class=&quot;-danger&quot;&gt;
      &lt;td&gt;Danger&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class=&quot;-light&quot;&gt;
      &lt;td&gt;Light&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
      &lt;td&gt;Cell&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <table class="-dark -striped -hover">
              <thead>
                <tr>
                  <th>Episode</th>
                  <th>Title</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IV</td>
                  <td>A New Hope</td>
                  <td>May 25, 1977</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>The Empire Strikes Back</td>
                  <td>May 21, 1980</td>
                </tr>
                <tr>
                  <td>VI</td>
                  <td>Return of the Jedi</td>
                  <td>May 25, 1983</td>
                </tr>
              </tbody>
            </table>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;table class=&quot;-dark -striped -hover&quot;&gt;
  &lt;thead&gt;
    ...
  &lt;/thead&gt;
  &lt;tbody&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="scrollable" class="jump"><a href="#scrollable"># Scrollable</a></h2>
        <p>To make a table responsive and to make it scrollable on overflow, wrap the table in a <code>table-scrollable</code> container</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="table-scrollable">
              <table>
                <thead>
                  <tr>
                    <th>Episode</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Release Date</th>
                    <th>Director</th>
                    <th>Producer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>IV</td>
                    <td>A New Hope</td>
                    <td>121 minutes</td>
                    <td>May 25, 1977</td>
                    <td>George Lucas</td>
                    <td>Gary Kurtz</td>
                  </tr>
                  <tr>
                    <td>V</td>
                    <td>The Empire Strikes Back</td>
                    <td>124 minutes</td>
                    <td>May 21, 1980</td>
                    <td>Irvin Kershner</td>
                    <td>Gary Kurtz</td>
                  </tr>
                  <tr>
                    <td>VI</td>
                    <td>Return of the Jedi</td>
                    <td>132 minutes</td>
                    <td>May 25, 1983</td>
                    <td>Richard Marquand</td>
                    <td>Howard Kazanjian</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;table-scrollable&quot;&gt;
  &lt;table&gt;
    &lt;thead&gt;
      ...
    &lt;/thead&gt;
    &lt;tbody&gt;
      ...
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
