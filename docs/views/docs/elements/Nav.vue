<template>
  <div>

    <h1>Navs</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#groups"># Groups</a></li>
          <li><a href="#collapsable"># Collapsable</a></li>
          <li><a href="#transparent"># Transparent</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Navs can be created by using the <code>nav</code> element and are classless by default. You can add a brand and groups to control how your nav functions.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <nav>
              <div class="brand">Brand</div>
              <div class="group">
                <a>Home</a>
                <a>Link</a>
                <div class="dropdown -right">
                  <a class="dropdown-toggle" tabindex="0">
                    <div class="avatar">
                      <img src="/images/avatar.png">
                    </div>
                  </a>
                  <div class="content">
                    <ul class="menu">
                      <li class="item"><a>Profile</a></li>
                      <li class="item"><a>Settings</a></li>
                      <li class="divider"></li>
                      <li class="item"><a>Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;nav&gt;
  &lt;div class=&quot;brand&quot;&gt;Brand&lt;/div&gt;
  &lt;div class=&quot;group&quot;&gt;
    &lt;a&gt;Home&lt;/a&gt;
    &lt;a&gt;Link&lt;/a&gt;
    &lt;div class=&quot;dropdown -right&quot;&gt;
      &lt;a class=&quot;dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;
        &lt;div class=&quot;avatar&quot;&gt;
          &lt;img src=&quot;/images/avatar.png&quot;&gt;
        &lt;/div&gt;
      &lt;/a&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;ul class=&quot;menu&quot;&gt;
          &lt;li class=&quot;item&quot;&gt;&lt;a&gt;Profile&lt;/a&gt;&lt;/li&gt;
          &lt;li class=&quot;item&quot;&gt;&lt;a&gt;Settings&lt;/a&gt;&lt;/li&gt;
          &lt;li class=&quot;divider&quot;&gt;&lt;/li&gt;
          &lt;li class=&quot;item&quot;&gt;&lt;a&gt;Logout&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="groups" class="jump"><a href="#groups"># Groups</a></h2>
        <p>The <code>group</code> class is used to group elements by using flex and will justify to the end. Groups are not responsive or collapse by default. See below on how to make groups collapse on smaller screens.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <nav>
              <div class="brand">Brand</div>
              <div class="group">
                <a>Link</a>
              </div>
              <div class="group">
                <button>Button</button>
              </div>
            </nav>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;nav&gt;
  &lt;div class=&quot;brand&quot;&gt;Brand&lt;/div&gt;
  &lt;div class=&quot;group&quot;&gt;
    &lt;a&gt;Link&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class=&quot;group&quot;&gt;
    &lt;button&gt;Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="collapsable" class="jump"><a href="#collapsable"># Collapsable</a></h2>
        <p>You can make responsive or collapsable navs by adding the <code>-collapsable</code> modifier and a checkbox, with a <code>nav-toggle</code> class, with a label and adding the <code>-collapse</code> modifier to groups that should collapse on smaller screens.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <nav class="navbar -collapsable">
              <input type="checkbox" id="nav-toggle" class="nav-toggle">
              <label for="nav-toggle"><i class="icon fas fa-bars"></i></label>
              <div class="brand">Brand</div>
              <div class="group">
                <form style="width: 200px;">
                  <div class="inputs">
                    <input type="text" class="--rounded-left-full" placeholder="search">
                    <button type="submit" class="addon --border-left-0 --rounded-right-full"><i class="fas fa-search"></i></button>
                  </div>
                </form>
              </div>
              <div class="group -collapse">
                <a href="test">Home</a>
                <a href="test">Link</a>
              </div>
              <div class="group -collapse">
                <div class="dropdown -right">
                  <a class="dropdown-toggle" tabindex="0">
                    <div class="avatar">
                      <img src="/images/avatar.png">
                    </div>
                  </a>
                  <div class="content">
                    <ul class="menu">
                      <li class="item"><a>Profile</a></li>
                      <li class="item"><a>Settings</a></li>
                      <li class="divider"></li>
                      <li class="item"><a>Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;nav class=&quot;-collapsable&quot;&gt;
  &lt;input type=&quot;checkbox&quot; id=&quot;nav-toggle&quot; class=&quot;nav-toggle&quot;&gt;
  &lt;label for=&quot;nav-toggle&quot;&gt;&lt;i class=&quot;icon fas fa-bars&quot;&gt;&lt;/i&gt;&lt;/label&gt;
  &lt;div class=&quot;brand&quot;&gt;Brand&lt;/div&gt;
  &lt;div class=&quot;group&quot;&gt;
    &lt;form style=&quot;width: 200px;&quot;&gt;
      &lt;div class=&quot;inputs&quot;&gt;
        &lt;input type=&quot;text&quot; class=&quot;--rounded-left-full&quot; placeholder=&quot;search&quot;&gt;
        &lt;button type=&quot;submit&quot; class=&quot;addon --border-left-0 --rounded-right-full&quot;&gt;&lt;i class=&quot;fas fa-search&quot;&gt;&lt;/i&gt;&lt;/button&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  &lt;div class=&quot;group -collapse&quot;&gt;
    &lt;a href=&quot;test&quot;&gt;Home&lt;/a&gt;
    &lt;a href=&quot;test&quot;&gt;Link&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class=&quot;group -collapse&quot;&gt;
    &lt;div class=&quot;dropdown -right&quot;&gt;
      &lt;a class=&quot;dropdown-toggle&quot; tabindex=&quot;0&quot;&gt;
        &lt;div class=&quot;avatar&quot;&gt;
          &lt;img src=&quot;/images/avatar.png&quot;&gt;
        &lt;/div&gt;
      &lt;/a&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;ul class=&quot;menu&quot;&gt;
          &lt;li class=&quot;item&quot;&gt;&lt;a&gt;Profile&lt;/a&gt;&lt;/li&gt;
          &lt;li class=&quot;item&quot;&gt;&lt;a&gt;Settings&lt;/a&gt;&lt;/li&gt;
          &lt;li class=&quot;divider&quot;&gt;&lt;/li&gt;
          &lt;li class=&quot;item&quot;&gt;&lt;a&gt;Logout&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="transparent" class="jump"><a href="#transparent"># Transparent</a></h2>
        <p>You can make a nav transparent by using the <code>-transparent</code> modifier which removes the background and box-shadow. You should pair a transparent nav with other color utilities.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <nav class="-transparent">
              <div class="brand --color-blue-darken">Brand</div>
              <div class="group">
                <a class="--color-red --hover-color-pink-darken">Link</a>
              </div>
              <div class="group">
                <button class="-primary">Button</button>
              </div>
            </nav>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;nav class=&quot;-transparent&quot;&gt;
  &lt;div class=&quot;brand --color-blue-darken&quot;&gt;Brand&lt;/div&gt;
  &lt;div class=&quot;group&quot;&gt;
    &lt;a class=&quot;_color-red --hover-color-pink-darken&quot;&gt;Link&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class=&quot;group&quot;&gt;
    &lt;button class=&quot;-primary&quot;&gt;Button&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
