 
function compareVersions (v1, v2) {
  const vers1 = v1.split('.').map(Number),
        vers2 = v2.split('.').map(Number);
  if (vers1[0] === 0 && vers2[0] === 0) return true;
  return vers1[0] < vers2[0] 
          ? false 
        :vers1[0] > vers2[0] 
          ? true
          : compareVersions(vers1.slice(1).join('.') || '0',
                            vers2.slice(1).join('.') || '0')
}