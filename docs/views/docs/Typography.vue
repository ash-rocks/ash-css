<template>
  <div>

    <h1>Typography</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#block"># Block Level</a></li>
          <li><a href="#inline"># Inline Level</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="block" class="jump"><a href="#block"># Block Level</a></h2>
          <p>Use HTML text content elements to organize blocks or sections of content.</p>
        </section>

        <section>
          <figure>
            <header>
              The <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest. There is also the <code>h1</code>-<code>h6</code> classes to match the look of a heading to another without changing the level.
            </header>
            <div class="content">
              <div class="row">
                <div class="column -12 -md-6">
                  <h1>1st level heading</h1>
                  <h2>2nd level heading</h2>
                  <h3>3rd level heading</h3>
                  <h4>4th level heading</h4>
                  <h5>5th level heading</h5>
                  <h6>6th level heading</h6>
                </div>
                <div class="column -12 -md-6">
                  <h6 class="h1">6th level heading with the <code>h1</code> class</h6>
                  <h6 class="h2">6th level heading with the <code>h2</code> class</h6>
                  <h6 class="h3">6th level heading with the <code>h3</code> class</h6>
                  <h6 class="h4">6th level heading with the <code>h4</code> class</h6>
                  <h6 class="h5">6th level heading with the <code>h5</code> class</h6>
                  <h6 class="h6">6th level heading with the <code>h6</code> class</h6>
                </div>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <figure>
            <header>
              The <code>&lt;address&gt;</code> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
            </header>
            <div class="content">
              <address>
                You can visit us at the following links:<br>
                <a href="https://github.com/skuIIs">Profile</a><br>
                <a href="https://ashcss.rocks/">Website</a><br>
                <a href="https://github.com/ash-rocks/ash-css">Github</a>
              </address>
            </div>
          </figure>
        </section>

        <section>
          <figure>
            <header>
              The <code>&lt;blockquote&gt;</code> element indicates that the enclosed text is an extended quotation. See <router-link :to="{ name: 'elements.blockquote'}">blockquote</router-link>
            </header>
            <div class="content">
              <blockquote cite="Aldous Huxley, Brave New World">
                <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
              </blockquote>
            </div>
          </figure>
        </section>

        <section>
          <figure>
            <header>
              The <code>&lt;dl&gt;</code> element represents a description list. The element encloses a list of groups of terms (specified using the <code>dt</code> element) and descriptions (provided by <code>dd</code> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs). See <router-link :to="{ name: 'elements.list'}">list</router-link>.
            </header>
            <div class="content">
              <dl>
                <dt>HTML</dt>
                <dd>Hyper Text Markup Language.</dd>

                <dt>CSS</dt>
                <dd>Cascading Style Sheets.</dd>

                <dt>JavaScript</dt>
                <dd>Lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</dd>
              </dl>
            </div>
          </figure>
        </section>

        <section>
          <figure>
            <header>
              The <code>&lt;ol&gt;</code> element represents an ordered list of items, typically rendered as a numbered list. By default list styling has been removed with <code>list-style: none;</code>. See <router-link :to="{ name: 'elements.list'}">list</router-link> for the modifiers for list styling.
            </header>
            <div class="content">
              <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ol>
            </div>
          </figure>
        </section>

        <section>
          <figure>
            <header>
              The <code>&lt;ul&gt;</code> element represents an unordered list of items, typically rendered as a bulleted list. By default list styling has been removed with <code>list-style: none;</code>. See <router-link :to="{ name: 'elements.list'}">list</router-link> for the modifiers for list styling.
            </header>
            <div class="content">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="inline" class="jump"><a href="#inline"># Inline Level</a></h2>
          <p>Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.</p>
        </section>

        <section>
          <figure>
            <div class="content">
              <ul class="-circle">
                <li><a>Anchor</a></li>
                <li><abbr title="Abbreviation">Abbr</abbr></li>
                <li><b>Bold</b></li>
                <li><cite>Cite</cite></li>
                <li><code>Code</code></li>
                <li><data value="500">Data</data></li>
                <li><dfn title="Definition">Definition</dfn></li>
                <li><em>Emphasis</em></li>
                <li><i>Idiomatic</i></li>
                <li><kbd>Keyboard Input</kbd></li>
                <li><mark>Mark</mark></li>
                <li><q>Quote</q></li>
                <li><s>Strikethrough</s></li>
                <li><samp>Sample</samp></li>
                <li><small>Small</small></li>
                <li><strong>Strong</strong></li>
                <li>Sub<sub>script</sub></li>
                <li>Super<sup>script</sup></li>
                <li><time datetime="2021-01-01">January 1</time></li>
                <li><u>Unarticulated Annotation</u></li>
                <li><var>Variable</var></li>
              </ul>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
