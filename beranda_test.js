const { setSharedCookies } = require('@codeceptjs/configure');
Feature('beranda');

Scenario('test beranda',  async ({ I, login }) => {
  // Set the shared cookies for the WebDriver helper
  await login('admin');
  // Access the dashboard page
  I.amOnPage('/beranda');
  // wilayah
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Wilayah Desa')));  
  I.amOnPage('/wilayah');
  I.click('Beranda');
  // penduduk
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Penduduk')));
  I.amOnPage('/penduduk');
  I.click('Beranda');
  // keluarga
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Keluarga')));
  I.amOnPage('/keluarga');
  I.click('Beranda');
  // keluar
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Surat Tercetak')));
  I.amOnPage('/keluar');
  I.click('Beranda');
  // kelompok
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Kelompok')));
  I.amOnPage('/kelompok');
  I.click('Beranda');
  // rtm
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Rumah Tangga')));
  I.amOnPage('/rtm');
  I.click('Beranda');
  // program_bantuan
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Bantuan')));
  I.amOnPage('/program_bantuan');
  I.click('Beranda');
  // layanan mandiri
  I.click(locate('a').withText('Lihat Detail').inside(locate('.small-box').withText('Verifikasi Layanan Mandiri')));
  I.amOnPage('/mandiri');  
});
