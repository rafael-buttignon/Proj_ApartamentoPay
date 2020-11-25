using ApartamentoPay.Dominio.Contratos;
using ApartamentoPay.Dominio.Entidades;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;

namespace ApartamentoPay.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartamentoController : Controller
    {
        private readonly IApartamentoRepositorio _apartamentoRepositorio;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnviroment;

        public ApartamentoController(IApartamentoRepositorio apartamentoRepositorio, 
            IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnviroment)
        {
            _apartamentoRepositorio = apartamentoRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnviroment = hostingEnviroment;
        }

        /// <summary>
        /// Retorna todos os Apartamentos.
        /// </summary>
        /// <returns code="200"> A lista de apartamentos foi obtida com sucesso.</returns>
        /// <returns code="400"> A lista de apartamentos não foi obtida com sucesso.</returns>
        /// 
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Json(_apartamentoRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        /// <summary>
        /// Adiciona um novo Apartamento.
        /// </summary>
        /// <returns code="201"> Foi adicionado um apartamento com sucesso. </returns>
        /// <returns code="400"> Não foi adicionado um apartamento. </returns>

        [HttpPost]
        public IActionResult Post([FromBody]Apartamento apartamento)
        {
            try
            {
                apartamento.Validate();
                if (!apartamento.EhValido)
                {
                    return BadRequest(apartamento.ObterMensagensValidacao());
                }
                _apartamentoRepositorio.Adicionar(apartamento);
                return Created("api/apartamento", apartamento);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo, extensao);
                var pastaArquivos = _hostingEnviroment.WebRootPath + "\\arquivos\\";
                var nomeCompleto = pastaArquivos + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Json(novoNomeArquivo);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        private static string GerarNovoNomeArquivo(string nomeArquivo, string extensao)
        {
            var arrayNomeCampacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCampacto).Replace(" ", "-");
            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extensao}";
            return novoNomeArquivo;
        }
    }
}