<template>
    <div class="pricing">
        <header class="crm__header">
            <h1>CRM Pricing</h1>
            <p class="subheading"> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio magni numquam doloribus natus minima dolore eum sint dolorem libero perspiciatis.
            </p>
        </header>
        <div class="price__list">
            <div class="price__card"
                v-for="pricing in prices"
                :key="pricing.type">
                <div class="plan__type">
                    <h3>{{pricing.type}}</h3>
                </div>
                <div class="plan__price">
                    <span class="dollar">$</span>
                    <span class="price">{{pricing.price}}</span>
                </div>
                <div class="plan__description">
                    <p>{{pricing.description}}</p>
                </div>
                <div class="plan__button">
                    <button>{{pricing.button}}</button>
                </div>
             </div>
        </div>
    </div>
</template>
<style lang="scss" src="./Pricing.scss"></style>
<script src="./Pricing.js"></script>