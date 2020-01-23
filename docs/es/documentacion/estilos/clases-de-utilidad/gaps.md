# Gaps

<Preview>
  <template slot="demo">
    <div class="preview-items">
      <div 
        v-for="n in 8" 
        :class="{ 
          'u-gap-dunite': n === 1,
          'u-gap-diorite': n === 2,
          'u-gap-basalt': n === 3,
          'u-gap-obsidian': n === 4,
          'u-gap-tuff': n === 5,
          'u-gap-pumice': n === 6,
          'u-gap-scoria': n === 7,
          'u-gap-coal': n === 8,
        }" 
        style="display: grid; grid-template-columns: auto 1fr;"
      >
        <div style="width: 2rem; height: 2rem; background: var(--docs-color-border);"></div>
        <div style="width: 100%; height: 2rem; background: var(--docs-color-border); padding: 0.5rem;">
          <span v-if="n === 1">dunite</span>
          <span v-if="n === 2">diorite</span>
          <span v-if="n === 3">basalt</span>
          <span v-if="n === 4">obsidian</span>
          <span v-if="n === 5">tuff</span>
          <span v-if="n === 6">pumice</span>
          <span v-if="n === 7">scoria</span>
          <span v-if="n === 8">coal</span>
        </div>
      </div>
    </div>
  </template>
</Preview>

| Nombre     | Clase             | Propiedad CSS |
|------------|-------------------|---------------|
| `dunite`   | `.u-gap-dunite`   | `grid-gap`    |
| `diorite`  | `.u-gap-diorite`  | `grid-gap`    |
| `basalt`   | `.u-gap-basalt`   | `grid-gap`    |
| `obsidian` | `.u-gap-obsidian` | `grid-gap`    |
| `tuff`     | `.u-gap-tuff`     | `grid-gap`    |
| `pumice`   | `.u-gap-pumice`   | `grid-gap`    |
| `scoria`   | `.u-gap-scoria`   | `grid-gap`    |
| `coal`     | `.u-gap-coal`     | `grid-gap`    |