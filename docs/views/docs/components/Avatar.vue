<template>
  <div>

    <h1>Avatars</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#presence"># Presence</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Avatars are used to display user profile images or initials with optional online presences. Initials can be used with the <code>data-initial</code> attribute.</p>

          <figure>
            <header>
              <div class="avatar --margin-right-2">
                <img src="/images/avatar.png" alt="Avatar">
              </div>
              <div class="avatar" data-initial="LS"></div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;avatar&quot;&gt;
                    &lt;img src=&quot;/images/avatar.png&quot;&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;avatar&quot; data-initial=&quot;LS&quot;&gt;&lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>Avatars have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>. Colors will only work with initials and will be hidden if an image is used.</p>

          <figure>
            <header>
              <div class="avatar -primary --margin-right-2" data-initial="LS"></div>
              <div class="avatar -success --margin-right-2" data-initial="LS"></div>
              <div class="avatar -warning --margin-right-2" data-initial="LS"></div>
              <div class="avatar -danger --margin-right-2" data-initial="LS"></div>
              <div class="avatar -dark --margin-right-2" data-initial="LS"></div>
              <div class="avatar -light" data-initial="LS"></div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;avatar -primary&quot; data-initial=&quot;LS&quot;&gt;&lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
          <p>You can change the size of avatars by using the <code>-small</code>, <code>-normal</code>, <code>-medium</code>, <code>-large</code> modifiers.</p>

          <figure>
            <header>
              <div class="avatar -small --margin-right-2" data-initial="SM">
                <i class="presence"></i>
              </div>
              <div class="avatar -normal --margin-right-2" data-initial="NM">
                <i class="presence"></i>
              </div>
              <div class="avatar -medium --margin-right-2" data-initial="MD">
                <i class="presence"></i>
              </div>
              <div class="avatar -large" data-initial="LG">
                <i class="presence"></i>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;avatar -small&quot; data-initial=&quot;SM&quot;&gt;
                    &lt;i class=&quot;presence&quot;&gt;&lt;/i&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="presence" class="jump"><a href="#presence"># Presence</a></h2>
          <p>You can add a status to an avatar by using the <code>presence</code> element. Presences have color modifiers available.</p>

          <figure>
            <header>
              <div class="avatar --margin-right-2" data-initial="LS">
                <i class="presence"></i>
              </div>
              <div class="avatar --margin-right-2" data-initial="LS">
                <i class="presence -primary"></i>
              </div>
              <div class="avatar --margin-right-2" data-initial="LS">
                <i class="presence -success"></i>
              </div>
              <div class="avatar --margin-right-2" data-initial="LS">
                <i class="presence -warning"></i>
              </div>
              <div class="avatar --margin-right-2" data-initial="LS">
                <i class="presence -danger"></i>
              </div>
              <div class="avatar --margin-right-2" data-initial="LS">
                <i class="presence -dark"></i>
              </div>
              <div class="avatar" data-initial="LS">
                <i class="presence -light"></i>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;avatar&quot; data-initial=&quot;LS&quot;&gt;
                    &lt;i class=&quot;presence&quot;&gt;&lt;/i&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;avatar&quot; data-initial=&quot;LS&quot;&gt;
                    &lt;i class=&quot;presence -primary&quot;&gt;&lt;/i&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
