<template>
  <div class="language-settings">
    <language-settings-dialog/>
  </div>
</template>

<script>
import LanguageSettingsDialog
  from './language-settings/components/language-settings-dialog';

export default {
  name: 'language-settings',
  components: { LanguageSettingsDialog },
};
</script>

<style lang="less" scoped>
.language-settings {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #180052;
}
</style>
