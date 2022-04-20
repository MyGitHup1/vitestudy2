<script lang="tsx">
import logo from "#/logo2.png"
import "@/common/a"
export default {
  setup() {
    function btn() {
      console.log(12312312)
    }

    return () => (<div onClick={() => btn()} class="a">
      <div>funRender</div>
      <>111111111111</>
      <img src={logo} alt="logo"/>
      <global-b/>
      <ph-apple-logo-fill ></ph-apple-logo-fill>
    </div>)
  },
}

</script>

<style lang="scss" scoped>
$a: blue;
.a {
  background: $a;
  animation: 1s aasd infinite;
}
</style>
<style lang="sass" scoped>
.a
  color: white

body
  background: red
</style>
<style lang="less">
@bor: black;
.a {
  border: 2px solid @bor;
}
</style>