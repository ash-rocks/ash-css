<template>
  <div>

    <h1>Grid</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#containers"># Containers</a></li>
          <li><a href="#rows"># Rows</a></li>
          <li><a href="#columns"># Columns</a></li>
          <li><a href="#offsets"># Offsets</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column -12">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>The grid system is a 12 column flexbox based responsive layout. This system is similar to other popular frameworks but with better class conventions.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="container">
              <div class="row --margin-0">
                <div class="column --border --border-solid --border-gray --padding-2">1 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">2 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">3 of 3</div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;1 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;2 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;3 of 3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="containers" class="jump"><a href="#containers"># Containers</a></h2>
        <p>Containers are required to use the grid system and work with rows or other containers. Use the <code>container</code> class to set the <code>max-width</code> of each breakpoint. You can add the <code>-fluid</code> modifier to the container to have the width set to 100% at all breakpoints.</p>
        <div class="alert -primary" role="alert">
          <div class="content">
            Due to the example below being nested inside other containers and elements you will not see the effects of the <code class="--background-black-lighten --padding-x-1">container -fluid</code> container. This is an example of why nested containers can but shouldn't be used! To created nested layouts use nested rows.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="container">
              .container
              <div class="row">
                <div class="column --border --border-solid --border-gray --padding-2">1 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">2 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">3 of 3</div>
              </div>
            </div>
            <div class="container -fluid">
              .container .-fluid
              <div class="row">
                <div class="column --border --border-solid --border-gray --padding-2">1 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">2 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">3 of 3</div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="language-html --margin-0">
              <code>
&lt;div class=&quot;container&quot;&gt;
  .container
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;1 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;2 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;3 of 3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;container -fluid&quot;&gt;
  .container .-fluid
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;1 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;2 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;3 of 3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="rows" class="jump"><a href="#rows"># Rows</a></h2>
        <p>Rows should be wrapped inside a container and should contain other rows, for nested layouts, or columns.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="container">
              <div class="row">
                <div class="column --border --border-solid --border-gray --padding-2">1 of 1</div>
              </div>
              <div class="row">
                <div class="column --border --border-solid --border-gray --padding-2">1 of 2</div>
                <div class="column --border --border-solid --border-gray --padding-2">2 of 2</div>
              </div>
              <div class="row">
                <div class="column --border --border-solid --border-gray --padding-2">1 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">2 of 3</div>
                <div class="column --border --border-solid --border-gray --padding-2">3 of 3</div>
              </div>
              <div class="row --margin-0">
                <div class="column --border --border-solid --border-primary">
                  <span class="--padding-2">1 of 1</span>
                  <div class="row">
                    <div class="column --border --border-solid --border-gray --padding-2">1 of 2</div>
                    <div class="column --border --border-solid --border-gray --padding-2">2 of 2</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="language-html --margin-0">
              <code>
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;1 of 1&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;1 of 2&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;2 of 2&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;1 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;2 of 3&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;3 of 3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;
      &lt;span class=&quot;--padding-2&quot;&gt;1 of 1&lt;/span&gt;
      &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;column&quot;&gt;1 of 2&lt;/div&gt;
        &lt;div class=&quot;column&quot;&gt;2 of 2&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="columns" class="jump"><a href="#columns"># Columns</a></h2>
        <p>You can use equal-length columns inside rows by using the <code>column</code> class. To have the width of a column set to auto based on the content use the <code>-auto</code> modifier. To specify the width of the column on all breakpoint you can use the <code>-1</code> to <code>-12</code> modifiers. To use the responsive behavior of stacking on certain breakpoints you can add the <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code> keywords between the column and width to form repsonsive classes for columns. You can specify the width of each breakpoint by combining column modifiers.</p>
        <div class="alert -primary" role="alert">
          <div class="content">
            When combining breakpoint modifiers for columns you should start from the smallest and work your way up to the largest. If no larger modifiers are used the largest modifier will be used on larger breakpoints.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="container">
              <div class="row">
                <div class="column --border --border-solid --border-gray --padding-2">.column</div>
                <div class="column --border --border-solid --border-gray --padding-2">.column</div>
                <div class="column --border --border-solid --border-gray --padding-2">.column</div>
              </div>
              <div class="row">
                <div class="column -auto --border --border-solid --border-gray --padding-2">.column .-auto</div>
                <div class="column -auto --border --border-solid --border-gray --padding-2">.column .-auto</div>
                <div class="column -auto --border --border-solid --border-gray --padding-2">.column .-auto</div>
              </div>
              <div class="row">
                <div class="column -4 --border --border-solid --border-gray --padding-2">.column .-4</div>
                <div class="column -4 --border --border-solid --border-gray --padding-2">.column .-4</div>
                <div class="column -4 --border --border-solid --border-gray --padding-2">.column .-4</div>
              </div>
              <div class="row">
                <div class="column -md-4 --border --border-solid --border-gray --padding-2">.column .-md-4</div>
                <div class="column -md-4 --border --border-solid --border-gray --padding-2">.column .-md-4</div>
                <div class="column -md-4 --border --border-solid --border-gray --padding-2">.column .-md-4</div>
              </div>
              <div class="row --margin-0">
                <div class="column -md-6 -lg-4 --border --border-solid --border-gray --padding-2">.column .-md-6 .-lg-4</div>
                <div class="column -md-6 -lg-4 --border --border-solid --border-gray --padding-2">.column .-md-6 .-lg-4</div>
                <div class="column -md-12 -lg-4 --border --border-solid --border-gray --padding-2">.column .-md-12 .-lg-4</div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="language-html --margin-0">
              <code>
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column&quot;&gt;.column&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;.column&lt;/div&gt;
    &lt;div class=&quot;column&quot;&gt;.column&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -auto&quot;&gt;.column .-auto&lt;/div&gt;
    &lt;div class=&quot;column -auto&quot;&gt;.column .-auto&lt;/div&gt;
    &lt;div class=&quot;column -auto&quot;&gt;.column .-auto&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -4&quot;&gt;.column .-4&lt;/div&gt;
    &lt;div class=&quot;column -4&quot;&gt;.column .-4&lt;/div&gt;
    &lt;div class=&quot;column -4&quot;&gt;.column .-4&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -md-4&quot;&gt;.column .-md-4&lt;/div&gt;
    &lt;div class=&quot;column -md-4&quot;&gt;.column .-md-4&lt;/div&gt;
    &lt;div class=&quot;column -md-4&quot;&gt;.column .-md-4&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -md-6 -lg-4&quot;&gt;.column .-md-6 .-lg-4&lt;/div&gt;
    &lt;div class=&quot;column -md-6 -lg-4&quot;&gt;.column .-md-6 .-lg-4&lt;/div&gt;
    &lt;div class=&quot;column -md-12 -lg-4&quot;&gt;.column .-md-12 .-lg-4&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="offsets" class="jump"><a href="#offsets"># Offsets</a></h2>
        <p>Offsets can be added to a column. You can specify a column offset by using the <code>offset</code> modifier with the same naming as the breakpoint modifiers. You should match any breakpoint modifier with a corresponding offset modifier. Offsets are always added to the left of a column.</p>
      </div>
    </div>
    <div class="row">
      <div class="column -12">
        <figure>
          <header>
            <div class="container">
              <div class="row">
                <div class="column -md-4 --border --border-solid --border-gray --padding-2">.column .-md-4</div>
                <div class="column -md-4 -offset-md-4 --border --border-solid --border-gray --padding-2">.column .-md-4 .-offset-md-4</div>
              </div>
              <div class="row">
                <div class="column -md-3 -offset-md-3 --border --border-solid --border-gray --padding-2">.column .-md-3 .-offset-md-3</div>
                <div class="column -md-3 -offset-md-3 --border --border-solid --border-gray --padding-2">.column .-md-3 .-offset-md-3</div>
              </div>
              <div class="row --margin-0">
                <div class="column -md-6 -offset-md-3 --border --border-solid --border-gray --padding-2">.column .-md-6 .-offset-md-3</div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="language-html --margin-0">
              <code>
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -md-4&quot;&gt;.column .-md-4&lt;/div&gt;
    &lt;div class=&quot;column -md-4 -offset-md-4&quot;&gt;.column .-md-4 .-offset-md-4&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -md-3 -offset-md-3&quot;&gt;.column .-md-3 .-offset-md-3&lt;/div&gt;
    &lt;div class=&quot;column -md-3 -offset-md-3&quot;&gt;.column .-md-3 .-offset-md-3&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;div class=&quot;column -md-6 -offset-md-3&quot;&gt;.column .-md-6 .-offset-md-3&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
