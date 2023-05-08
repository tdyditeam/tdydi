<template>
  <footer class="footer __container">
    <div class="footer__row">
      <div class="footer__left-block left-block-footer">
        <div class="left-block-footer__logo-block">
          <div class="left-block-footer__image">
            <img src="@/assets/img/home/footer/logo.png" alt="logo" />
          </div>
          <div class="left-block-footer__adress">
            {{ $t('address') }}
          </div>
        </div>
        <div class="left-block-footer__about-wrapper">
          <div class="left-block-footer__about">
            <span>Faks:</span>
            <span>(+993 12) 48-62-89, (+993 12) 48-62-75</span>
          </div>
          <!-- <div class="left-block-footer__about">
            <span>Telefon:</span>
            <span>(+993 12) 48-62-75</span>
          </div> -->
          <div class="left-block-footer__about">
            <span>Email:</span>
            <span>info@tsiem.edu.tm</span>
          </div>
        </div>
      </div>
      <div class="footer__right-block right-block-footer">
        <p>Copyrighted © {{ new Date().getFullYear() }} TDYweDI</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 40px;
  font-family: 'Roboto Flex';
  &__row {
    border-top: 1px solid #808884;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
    flex-wrap: wrap;
    gap: 10px;
    @media (max-width: 992px) {
      gap: 30px;
    }
    @media (max-width: 479px) {
      border: none;
    }
  }
}
.left-block-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    flex: 0 1 100%;
    justify-content: center;
    gap: 30px;
  }
  @media (max-width: 767px) {
    gap: 30px;
  }
  &__logo-block {
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 992px) {
      flex: 0 1 100%;
      justify-content: center;
    }
  }

  &__image {
    flex: 0 0 66px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 479px) {
      flex: 0 0 60px;
    }
  }

  &__adress {
    max-width: 278px;
    font-weight: 600;
    font-size: 18px;
    line-height: 116%;
    color: #333333;
    text-align: start;
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__about-wrapper {
    display: flex;
    gap: 20px;
    @media (max-width: 992px) {
      flex: 0 1 100%;
      justify-content: center;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__about {
    display: flex;
    gap: 20px;
    @media (max-width: 767px) {
      justify-content: center;
    }
    span {
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #333333;
    }
    @media (max-width: 479px) {
      font-size: 14px;
    }
  }
}
.right-block-footer {
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  @media (max-width: 992px) {
    flex: 1 1 100%;
    text-align: center;
  }
}
</style>
