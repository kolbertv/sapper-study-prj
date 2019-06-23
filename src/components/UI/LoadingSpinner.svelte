<style>
  .lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #cf0056;
    border-color: #cf0056 transparent #cf0056 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
</style>

<div class="loading">
  <div class="lds-dual-ring">
    <!-- <p>Loading....</p> -->
  </div>

</div>
