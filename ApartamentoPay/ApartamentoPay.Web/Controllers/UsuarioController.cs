using ApartamentoPay.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ApartamentoPay.Web.Controllers
{
	[Route("api/[Controller]")]
	public class UsuarioController : Controller
    {

		[HttpGet]
		public ActionResult Get()
		{
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost("VerificarUsuario")]
		public ActionResult VerificarUsuario([FromBody] Usuario usuario)
		{
			try
			{
				if(usuario.Email == "rafa@teste.com" && usuario.Senha == "abc123")
				{
					return Ok(usuario);
				}
				return BadRequest("Usuário ou senha inválido!");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost]
        public ActionResult Post()
        {
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
        }
    }
}
