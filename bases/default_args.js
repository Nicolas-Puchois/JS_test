// valeur par default
/**
 *
 * @param {number} prixUnitaire
 * @param {number} nombreArticle
 * @param {number} tauxTVA
 * @returns {number} prix TTC calculé
 *
 * @author Nicolas Puchois <nicolas.puchoispro@gmail.com>
 * @link https://github.com/Nicolas-Puchois GitHub.
 */
const calculTTC = (prixUnitaire = 0, nombreArticle = 0, tauxTVA = 20) => {
  const prixTTC =
    nombreArticle * (prixUnitaire + (prixUnitaire * tauxTVA) / 100);
  return prixTTC;
};

const prix = calculTTC(5, 20);
console.log(prix);
