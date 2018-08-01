<template>
    <div class="dashboard__container pricing">
        <div class="d__logo"><dashboard-logo></dashboard-logo></div>
        <div class="d__header"><dashboard-header></dashboard-header></div>
        <div class="d__content">
             <div class="content ">
                <div class="pricing__cover">
                    <div class="cover__text">
                        <h1>Buzzooka CRM</h1>
                        <span>The fastest way to engage your customer</span>
                    </div>
                    <div class="cover__photo">
                        <img src="@/assets/icons/pricing/cover.png" class="responsive-img" alt="cover" />
                    </div>
                </div>
                <div class="price__list">
                    <div class="price__card"
                        v-for="pricing in prices"
                        :key="pricing.type">
                        <div class="plan__type"> {{pricing.type}} </div>
                        <div class="plan__price">
                            <label class="price">{{pricing.price}} <span class="monthly"> /mo </span></label>
                            <span class="discount">{{pricing.discount}}</span>
                        </div>
                        <div class="plan__description">
                            <p>{{pricing.description}}</p>
                        </div>
                        <div class="plan__button">
                            <v-btn ref="button" block>
                                {{pricing.button}}
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./Pricing.scss"></style>
<script src="./Pricing.js"></script>