import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

describe('#Categorias', () => {
  let bntNovaCategoria: ElementFinder;
  let btnSave: ElementFinder;
  let btnClear: ElementFinder;
  let btnClose: ElementFinder;
  let btnDelete: ElementArrayFinder;
  let nomeImput: ElementFinder;
  let descricaoImput: ElementFinder;
  let colNomeTable: ElementArrayFinder;
  let colDescricaoTable: ElementArrayFinder;
  let btnEdit: ElementArrayFinder;
  let sleep: Function;

  beforeEach(() => {
    bntNovaCategoria = element(by.id('nova-categoria'));
    btnSave = element(by.id('btn-save'));
    nomeImput = element(by.css('input[formControlName=nome]'));
    descricaoImput = element(by.css('input[formControlName=descricao]'));
    btnClear = element(by.id('btnLimparForm'));
    btnClose = element(by.id('btnCloseModal'));
    btnDelete = element.all(by.id('btnDelete'));
    colNomeTable = element.all(by.css('.cdk-column-nome'));
    colDescricaoTable = element.all(by.css('.cdk-column-descricao'));
    btnEdit = element.all(by.id('btnEdit'));
    sleep = (s: number) => browser.sleep(s);
  });

  it('Validar o cadastro da categoria', () => {
    browser.get('/categorias');
    bntNovaCategoria.click();
    nomeImput.sendKeys('Informática');
    descricaoImput.sendKeys('Geral');

    expect(btnSave.isEnabled()).toBeTruthy();
    sleep(2000);
    btnSave.click();

    expect(colNomeTable.count()).toEqual(5);
  });

  it('Validar multiplos cadastros', () => {
    browser.get('/categorias');

    // add 1º item
    bntNovaCategoria.click();
    nomeImput.sendKeys('Informática');
    descricaoImput.sendKeys('Geral');
    expect(btnSave.isEnabled()).toBeTruthy();
    sleep(2000);
    btnSave.click();

    // add 2º item
    bntNovaCategoria.click();
    nomeImput.sendKeys('Arroz');
    descricaoImput.sendKeys('Alimentos');
    expect(btnSave.isEnabled()).toBeTruthy();
    sleep(2000);
    btnSave.click();

    expect(colNomeTable.count()).toEqual(6);
  });

  it('Deve ter uma palavra com o nome [BRASIL] na descriçao', () => {
    btnEdit.get(3).click();

    nomeImput.clear();
    nomeImput.sendKeys('Informática');
    descricaoImput.clear();
    descricaoImput.sendKeys('Alo BRASIL');

    expect(btnSave.isEnabled()).toBeTruthy();
    sleep(2000);
    btnSave.click();

    expect(colDescricaoTable.get(4).getText()).toContain('BRASIL');
  });

  it('Validar o Editar item', () => {
    btnEdit.get(2).click();

    nomeImput.clear();
    nomeImput.sendKeys('Informática');
    descricaoImput.clear();
    descricaoImput.sendKeys('Geral');

    expect(btnSave.isEnabled()).toBeTruthy();
    sleep(2000);
    btnSave.click();

    expect(colNomeTable.get(3).getText()).toEqual('Informática');
  });

  it('Validar o button limpar formulário ', () => {
    bntNovaCategoria.click();
    nomeImput.sendKeys('Informática');
    descricaoImput.sendKeys('Geral');
    sleep(2000);
    btnClear.click();

    expect(btnSave.isEnabled()).toBeFalsy();
    expect(btnClear.isEnabled()).toBeFalsy();

    sleep(2000);
    btnClose.click();
  });

  it('Validar a exclusão item', () => {
    btnDelete.last().click();
    sleep(2000);
    element(by.id('btnDeleteConfirm')).click();

    expect(colNomeTable.count()).toEqual(4);
  });
});
