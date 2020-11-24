<template>
  <div class="home container">
    <div class="banner featured mb-5">
      <img
        src="/img/default/default-banner_small.jpg"
        srcset="
          /img/default/default-banner_small.jpg 1000w,
          /img/default/default-banner.jpg 2000w,
        "
        alt="World’s First Electronic Bike makes its way into the market"
      />
      <h1 class="banner-title text-light-glow">
        World’s First Electronic Bike makes its way into the market
      </h1>
      <div class="banner-author">
        <div class="banner-author-img">

        </div>
        <div class="banner-author-description">
          <h3>Paolo Vincent Julian</h3>
          <p>August 26, 2019 Illustration by John Doe</p>
        </div>
      </div>
    </div>

    <div class="content mb-5">
      <div class="header mb-5">
        <div class="categories">
          <span class="active">#trending</span>
          <span>#popular</span>
          <span>#favorites</span>
          <span>#sports</span>
          <span>#lifestyle</span>
          <span>#food</span>
          <span>#bbc</span>
          <span>#chef</span>
          <span>#coronavirus</span>
          <span>#others</span>
        </div>
        <div class="search">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search.."
            />
        </div>
      </div>
      <div class="trending-articles grid">
        <div class="grid-sizer"></div>
        <div
          class="article-card grid-item"
          v-for="(article, i) in state.articles"
          :key="i"
        >
          <img
            :alt="article.title"
            class="article-card__img"
            :src="article.img"
            v-if="article.img"
          />
          <div class="article-card__description">
            <h3>{{ article.title }}</h3>
            <img/>
            <p>
              {{ article.author }}
            </p>
          </div>
          <div class="article-card__reactions">
            <div class="article-card__reactions__likes article-card__reactions__item">
              <span class="fa fa-thumbs-up"></span>
              <span class="count">1.1m</span>
            </div>
            <div class="article-card__reactions__dislikes article-card__reactions__item">
              <span class="fa fa-thumbs-down"></span>
              <span class="count">200k</span>
            </div>
            <div class="article-card__reactions__comments article-card__reactions__item">
              <span class="fa fa-comment"></span>
              <span class="count">109k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import Masonry from 'masonry-layout';

export default defineComponent({
  setup() {
    const state = reactive({
      articles: [
        {
          title: 'VP Leni: People know the truth',
          author: 'GMA News Online',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Water Interruption',
          author: 'GMA News Online',
          img: '/img/default/default-banner.jpg',
        },
        {
          title: 'Title 3',
          author: 'Author 3',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Title 3',
          author: 'Author 3',
          img: '/img/dummy/dummy-1.jpg',
        },
        {
          title: 'Title 4',
          author: 'Author 4',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Title 5',
          author: 'Author 5',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Title 6',
          author: 'Author 6',
          img: '/img/default/default-banner.jpg',
        },
        {
          title: 'Title 7',
          author: 'Author 7',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Title 8',
          author: 'Author 8',
          img: '/img/dummy/dummy-2.jpg',
        },
        {
          title: 'Title 9',
          author: 'Author 9',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Title 10',
          author: 'Author 10',
          img: '/img/default/default-banner_small.jpg',
        },
        {
          title: 'Title 11',
          author: 'Author 11',
          img: '/img/default/default-banner_small.jpg',
        },
      ],
    });

    onMounted(() => {
      const elMasonry = document.querySelector('.grid') as HTMLElement;
      setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const masonry = new Masonry(elMasonry, {
          itemSelector: '.grid-item',
          // columnWidth: '.grid-sizer',
          percentPosition: true,
        });
      }, 10);
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  .grid-sizer,
  .grid-item {
    width: 100%;
    margin-bottom: 1rem;
    /** Tablet */
    @media screen and (min-width: 768px) {
      width: calc((100% - 0.5rem * 6)/3);
      margin: 0 0.5rem 1rem;
    }
    /** Web */
    @media screen and (min-width: 1024px) {
      width: calc((100% - (0.5rem * 8)) / 4);
    }
    @media screen and (min-width: 1200px) {
      width: calc((100% - (0.5rem * 10)) / 5);
    }
  }
}

/* clearfix */
.article-card {
  break-inside: avoid;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  // border-radius: 5px;
  overflow: hidden;
  text-align: left;
  &__img {
    width: 100%;
    height: auto;
  }
  &__description {
    display: grid;
    align-items: center;
    row-gap: 0.5rem;
    grid-template-columns: 2rem auto;
    grid-template-areas:
      "title title"
      "author-img author-name";
    padding: 1rem;
    h3 {
      color: $font-dark-primary;
      font-size: 1rem;
      grid-area: title;
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      background-color: grey;
      border-radius: 50%;
      grid-area: author-img;
    }
    p {
      color: $font-dark-secondary;
      font-size: 0.9rem;
      grid-area: author-name;
    }
  }
  &__reactions {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    &__item {
      margin-left: 1rem;
      cursor: pointer;
      .count {
        margin-left: 0.5rem;
      }
    }
    &__likes {
      color: $teal;
    }
    &__dislikes {
      color: $red;
    }
    &__comments {
      color: $dark-grey;
    }
  }
}

/** ============ Header ============ */
.header {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  /** ============ Categories ============ */
  .categories {
    color: $red;
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    span {
      border-radius: 10rem;
      cursor: pointer;
      margin-right: 0.5rem;
      padding: 0.5rem 1.2rem;
      &.active {
        background-color: $red;
        color: $font-white-primary;
      }
    }
  }

  /** ============ Search ============ */
  .search {
    width: 100%;
    background-color: $google-light-light;
    padding: 0.5rem 1.2rem;
    border-radius: 10rem;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.10);
    input {
      width: 100%;
    }
  }
}

</style>
